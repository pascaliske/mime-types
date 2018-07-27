import * as Mime from 'mime/Mime'
import * as standard from 'mime/types/standard.json'

const instance = new Mime(standard)

export interface TypeMap {
    [key: string]: Array<string>
}

export const getType = (path: string): string => instance.getType(path)
export const getExtension = (mime: string): string => instance.getExtension(mime)
export const define = (mimes: TypeMap, force?: boolean): void => instance.define(mimes, force)
