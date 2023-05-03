export const fetchWrapper = async <T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${input}`,
    init
  );

  const result = await data.json();

  return { ...result, status: data.status } as T;
};
