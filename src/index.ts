export { DemoControl } from './demo-control';
import { provideFASTDesignSystem,    
  fastFlipper
} from '@microsoft/fast-components';
provideFASTDesignSystem()
  .register(
    fastFlipper()
  );