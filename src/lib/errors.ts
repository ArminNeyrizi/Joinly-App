/**
 * Application-level error classes.
 * Use these instead of generic Error to carry structured information.
 */

/**
 * Thrown when a requested resource does not exist.
 */
export class NotFoundError extends Error {
  readonly code = "NOT_FOUND";

  constructor(resource: string, id?: string) {
    super(id ? `${resource} with id '${id}' not found` : `${resource} not found`);
    this.name = "NotFoundError";
  }
}

/**
 * Thrown when the current user is not authenticated.
 */
export class UnauthorizedError extends Error {
  readonly code = "UNAUTHORIZED";

  constructor(message = "Authentication required") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

/**
 * Thrown when the current user lacks permission for an action.
 */
export class ForbiddenError extends Error {
  readonly code = "FORBIDDEN";

  constructor(message = "You do not have permission to perform this action") {
    super(message);
    this.name = "ForbiddenError";
  }
}

/**
 * Thrown when input data fails business rule validation.
 */
export class ValidationError extends Error {
  readonly code = "VALIDATION_ERROR";

  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

/**
 * Thrown when a business rule is violated (e.g. enrollment closed, section full).
 */
export class BusinessRuleError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = "BusinessRuleError";
    this.code = code;
  }
}
