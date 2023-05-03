export namespace JSON2 {

  export function parseSafe(...args: Parameters<typeof JSON.parse>) {
    try {
      return {
        success: true as const,
        data: JSON.parse(...args) as unknown,
      };
    } catch (err) {
      return {
        success: false as const,
        error: err as Error,
      }
    }
  }

}