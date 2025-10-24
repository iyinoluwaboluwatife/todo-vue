// This file tells TypeScript how to treat files ending with '.vue'.
// It declares that any module imported ending in '.vue' is a Vue component,
// which satisfies the type checker and makes the errors go away.

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // DefineComponent is the type that Vue components have
  const component: DefineComponent<{}, {}, any>
  export default component
}
