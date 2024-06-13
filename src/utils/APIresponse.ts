class APIResponse<T> {
  constructor(
    public message: string,
    public data: T,
    public token?: string,
    public success = true
  ) {}
}

export default APIResponse;
