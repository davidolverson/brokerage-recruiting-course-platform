interface LoadingStateProps {
  message?: string
}

export default function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <p className="text-sm text-[#6B7280]">{message}</p>
    </div>
  )
}
