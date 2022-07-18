const baseUrl = "https://frontend-recruiting.100ladrillos.com/"

async function connect(url, method, payload) {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: method,
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    return error;
  }
}

export default connect;