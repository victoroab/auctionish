import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'

export default function Products() {
  return (
    <div className="">
      <section className="px-6 py-4 mb-8 h-full">
        <span className="text-xl px-8 flex items-center justify-between">
          My Products{' '}
          <div className="w-1/4 flex items-center justify-center gap-2">
            <MagnifyingGlassIcon className="w-6 h-6" />
            <Input type="search" className="w-full" placeholder="search.." />
          </div>
        </span>
        <section className="flex items-start gap-6 justify-center px-6 py-4 mb-8">
          <Card className="w-full rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center font-normal text-xl">
                <Button className="rounded-xl">
                  <span>Add new</span>
                  <PlusIcon className="w-6 h-6" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-4 h-[70vh] overflow-y-scroll">
              {new Array(12)
                .fill(
                  <Card className="rounded-xl cursor-pointer">
                    <CardHeader>
                      <CardTitle className="font-semibold text-base">
                        Product name
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[10rem] w-full flex items-center justify-center">
                        <Skeleton className="w-full h-full rounded-xl" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <CardDescription>
                        A brief card description..
                      </CardDescription>
                    </CardFooter>
                  </Card>
                )
                .map((item, idx) => item)}
              {/* <Card className="rounded-xl cursor-pointer">
                <CardHeader>
                  <CardTitle className="font-semibold text-base">
                    Product name
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[10rem] w-full flex items-center justify-center">
                    <Skeleton className="w-full h-full rounded-xl" />
                  </div>
                </CardContent>
                <CardFooter>
                  <CardDescription>A brief card description..</CardDescription>
                </CardFooter>
              </Card> */}
            </CardContent>
          </Card>
        </section>
      </section>
    </div>
  )
}
