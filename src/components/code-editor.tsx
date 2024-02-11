import MonacoEditor from '@monaco-editor/react';


interface CodeEditorditProps {
    initialValue: string;
}

const CodeEditor: React.FC<CodeEditorditProps> = ({ initialValue }) => {
    return <MonacoEditor 
        value={initialValue}
        theme="dark"
        language='javascript'
        height="500px"
        options={{
            wordWrap: 'on',
            minimap: { enabled: false },
            showUnused: false,
            folding: false,
            lineNumbersMinChars: 3,
            fontSize: 16,
            scrollBeyondLastLine: false,
            automaticLayout: true,
        }}
    />;
};

export default CodeEditor;