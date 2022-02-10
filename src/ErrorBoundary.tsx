import React from "react";

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false, error: undefined };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}