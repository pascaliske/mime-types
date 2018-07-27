import * as Mime from 'mime/Mime'
import * as standard from 'mime/types/standard.json'

const instance = new Mime(standard)

export const getType = (path: string): string => instance.getType(path)
export const getExtension = (mime: string): string => instance.getExtension(mime)
export const define = (mimes: any, force?: boolean): void => instance.define(mimes, force)
