export const fetchWrapper = async <T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${input}`,
    init
  );

  const result = (await data.json()) as T;

  if (Array.isArray(result)) {
    return result;
  }

  return { ...result, status: data.status };
};
