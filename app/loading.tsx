import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  return (
    <div className="flex flex-col text-white items-center h-screen space-x-4 p-24">
     <h1 className="text-5xl font-bold ">Loading</h1>
     <p className="text-2xl font-bold">This may take upto few seconds</p>
    </div>
  )
}

export default loading