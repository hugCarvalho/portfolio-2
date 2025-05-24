export const updatePageCount = async (page) => {
  const backend = process.env.NEXT_PUBLIC_API_BASE_URL
    fetch(`${backend}/${page}?web=portfolio2`, {
      method: "POST",
      cache: 'no-store',
    }).catch(error => {
      console.error("Fire-and-forget POST error:", error);
    });
}
