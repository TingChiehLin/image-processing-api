import fs from 'fs';

export default function fileExist(path: string): boolean {
    try {
        fs.accessSync(path)
        return true
    } catch (errror) {
        return false
    }
}
