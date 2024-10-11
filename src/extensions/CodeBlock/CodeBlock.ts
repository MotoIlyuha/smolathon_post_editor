import { CodeBlock } from '@tiptap/extension-code-block'; // Импортируйте стандартное расширение CodeBlock

export const CodeBlockExtension = CodeBlock.configure({
  defaultLanguage: 'javascript', // Установите язык по умолчанию, если нужно
});
