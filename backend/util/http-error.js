class HttpError extends Error {
  constructor(message, code) {
    super(message); // Ajoute un message d'erreur
    this.code = code; // Définit le code de statut HTTP de l'erreur
  }
}

export default HttpError;
