export function getEnv() {
const config = useRuntimeConfig()
return config.public.apiBase
}