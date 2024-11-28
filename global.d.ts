// global.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      script: {
        type?: string;
        suppressHydrationWarning?: boolean;
        dangerouslySetInnerHTML?: {
          __html: string;
        };
      };
    }
  }