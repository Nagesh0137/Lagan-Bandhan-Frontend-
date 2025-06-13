// Connection utility to check server availability
export const checkServerConnection = async (baseUrl: string): Promise<boolean> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(`${baseUrl}/ping`, {
      method: 'GET',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    console.error('Server connection check failed:', error);
    return false;
  }
};

export const getServerStatus = async (baseUrl: string): Promise<{
  isOnline: boolean;
  message: string;
}> => {
  const isOnline = await checkServerConnection(baseUrl);
  
  if (!isOnline) {
    return {
      isOnline: false,
      message: 'Unable to connect to server. Please ensure the server is running and try again.',
    };
  }
  
  return {
    isOnline: true,
    message: 'Server is online',
  };
};
