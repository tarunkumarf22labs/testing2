export interface ErrorResponse {
    status: number;
    name: string;
    message: string;
}


export function getErrorMessage(response: ErrorResponse): string {
  
    const { status, name, message } = response;

    return message || "Invalid data";
  }