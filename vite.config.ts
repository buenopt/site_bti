// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'

// Se quiser sobrescrever via env, exporte BASE_PATH=/ecogioti_site/
// Por padrão, aponta para subcaminho /ecogioti_site/
const BASE_PATH = process.env.BASE_PATH || '/bti_site/'
const IS_PREVIEW = !!process.env.IS_PREVIEW

export default defineConfig({
    define: {
        __BASE_PATH__: JSON.stringify(BASE_PATH),
        __IS_PREVIEW__: JSON.stringify(IS_PREVIEW),
    },
    plugins: [
        react(),
        AutoImport({
            imports: [
                {
                    react: [
                        'React',
                        'useState',
                        'useEffect',
                        'useContext',
                        'useReducer',
                        'useCallback',
                        'useMemo',
                        'useRef',
                        'useImperativeHandle',
                        'useLayoutEffect',
                        'useDebugValue',
                        'useDeferredValue',
                        'useId',
                        'useInsertionEffect',
                        'useSyncExternalStore',
                        'useTransition',
                        'startTransition',
                        'lazy',
                        'memo',
                        'forwardRef',
                        'createContext',
                        'createElement',
                        'cloneElement',
                        'isValidElement',
                    ],
                },
                {
                    'react-router-dom': [
                        'useNavigate',
                        'useLocation',
                        'useParams',
                        'useSearchParams',
                        'Link',
                        'NavLink',
                        'Navigate',
                        'Outlet',
                    ],
                },
                { 'react-i18next': ['useTranslation', 'Trans'] },
            ],
            dts: true,
        }),
    ],
    base: '/bti_site/',               // <- chave para servir em subpasta
    build: {
        sourcemap: true,
        outDir: 'dist',              // ajuste o Apache para apontar para dist/
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
})
