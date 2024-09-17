interface IuseWL {
    isActive: boolean;
    req: (endpoint: string, dataIn?: object, port?: number) => any;
}
declare function WLProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function useWL(): IuseWL;
export { useWL, WLProvider };
