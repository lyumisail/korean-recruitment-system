export default function Loading() {
  return (
    <div className="flex-1 p-6">
      <div className="space-y-4">
        <div className="h-8 w-48 rounded-md bg-muted animate-pulse"></div>
        <div className="h-[600px] rounded-md bg-muted animate-pulse"></div>
      </div>
    </div>
  )
}
