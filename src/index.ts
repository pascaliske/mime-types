import * as Mime from 'mime/Mime'
import * as standard from 'mime/types/standard.json'

/**
 * Internal instance of mime.
 *
 * @ignore
 */
const instance = new Mime(standard)

/**
 * Returns a mime type for the given file, path or extension.
 *
 * @param path - The file path for checking.
 * @returns - The resulting mime type.
 */
export const getType = (path: string): string => instance.getType(path)

/**
 * Returns the file extension for the given mime type.
 *
 * @param mime - The mime type for checking.
 * @returns - The resulting file extension.
 */
export const getExtension = (mime: string): string => instance.getExtension(mime)

/**
 * Define additional mime types for usage with this library.
 *
 * @param mimes - A map of mime types and file extensions.
 * @param force - Optional boolean flag to force override existing mime types.
 */
export const define = (mimes: Record<string, string[]>, force?: boolean): void => {
    return instance.define(mimes, force)
}
