import "server-only";

export class AuthenticationRequiredError extends Error {
  constructor(message = "Authentication is required.") {
    super(message);
    this.name = "AuthenticationRequiredError";
  }
}

export class AuthorizationError extends Error {
  constructor(message = "You do not have permission to perform this action.") {
    super(message);
    this.name = "AuthorizationError";
  }
}

export class SuspendedAccountError extends Error {
  constructor(message = "This account is suspended.") {
    super(message);
    this.name = "SuspendedAccountError";
  }
}
