export const minuteToDuration = ({ minute }: { minute: number }) => {
    let hour = Math.floor(minute / 60)
    let minutes = minute % 60
    return `${hour}h ${minutes}m`
}
