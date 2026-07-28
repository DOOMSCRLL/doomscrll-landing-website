import type ProjectPreview from "models/project-preview"

let cachedProjects: Array<ProjectPreview> | null = null
let cacheTimestamp = 0

export async function getLiveProjects(count = 9): Promise<Array<ProjectPreview>> {
  const now = Date.now()
  if (cachedProjects && now - cacheTimestamp < 60_000) {
    return cachedProjects.slice(0, count)
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3500)
    const res = await fetch(`https://api.doomscrll.com/projects?batchSize=${count}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    })
    clearTimeout(timeoutId)
    if (!res.ok) return cachedProjects?.slice(0, count) ?? []

    const body = (await res.json()) as {
      success: boolean
      data?: Array<{
        name?: string
        coverImagePath?: string | null
        creator?: { username?: string }
        authorUsername?: string
      }>
    }
    const liveItems = body.success && Array.isArray(body.data) ? body.data : []

    const formatted: Array<ProjectPreview> = liveItems.map((item) => {
      const cover = item.coverImagePath || ""
      const imageUrl = cover.startsWith("http")
        ? cover
        : cover.startsWith("projects/")
          ? `https://cdn.doomscrll.com/${cover}`
          : "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/hero_capsule.jpg"
      return {
        name: item.name || "DOOMSCROLL",
        author: item.creator?.username || item.authorUsername || "_notymc",
        imageUrl,
      }
    })

    cachedProjects = formatted
    cacheTimestamp = now
    return formatted.slice(0, count)
  } catch {
    return cachedProjects?.slice(0, count) ?? []
  }
}
