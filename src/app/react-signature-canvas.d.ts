declare module 'react-signature-canvas' {
  import { Component } from 'react';

  export interface SignatureCanvasProps {
    ref?: React.RefObject<HTMLCanvasElement>;
    penColor?: string;
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
    backgroundColor?: string;
    clearOnResize?: boolean;
    velocityFilterWeight?: number;
    minWidth?: number;
    maxWidth?: number;
    dotSize?: number | (() => number);
  }

  export default class SignatureCanvas extends Component<SignatureCanvasProps> {
    clear(): void;
    getTrimmedCanvas(): HTMLCanvasElement;
    isEmpty(): boolean;
  }
}
