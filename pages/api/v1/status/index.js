function status(request, response) {
  response.status(200).json({ chave: "Status OK" });
}

export default status;
