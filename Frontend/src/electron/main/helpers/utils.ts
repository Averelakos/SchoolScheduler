/**
 * Check if the enviroment the app run is in developemnt 
 * or not
 * @returns boolean value
 */
export function isDev(): boolean {
    return process.env.NODE_ENV === 'development'
}