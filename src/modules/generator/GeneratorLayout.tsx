import { Form } from './Form';
import { GeneratedText } from './GeneratedText';
import { generatorStyles } from './style.css';

export const GeneratorLayout = () => {
  return (
    <div className={generatorStyles.container}>
      <Form />
      <GeneratedText />
    </div>
  );
};
