import {
  Card,
  CardContent,
  CardTitle,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  PersonIcon,
  EnvelopeClosedIcon,
  BellIcon,
  RocketIcon,
  Crosshair2Icon,
  TimerIcon,
  DashboardIcon,
  MagnifyingGlassIcon,
  GearIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

export default function MainApp() {
  return (
    <div>
      {/* <span className="text-xl px-8">Profile</span> */}
      <section className="px-6 py-4 mb-8">
        <Card className="w-full cursor-pointer rounded-2xl">
          <CardHeader className="">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted-foreground"></div>
                <span className="text-primary text-md">victoroab</span>
              </div>
              <div className="font-normal text-lg flex items-center gap-3 justify-center hover:text-muted-foreground">
                Settings
                <GearIcon className="w-7 h-7" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-auto p-4 flex justify-around gap-6">
            <Card className="w-1/3 hover:bg-secondary cursor-pointer rounded-2xl">
              {/* <CardContent className="mt-4">Notifications</CardContent> */}
              <CardHeader>
                <CardTitle className="flex items-center justify-between font-normal text-md">
                  <div className="flex items-center justify-center gap-3">
                    <PersonIcon className="w-8 h-8" />
                    <span>Profile</span>
                  </div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>{' '}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="w-1/3 hover:bg-secondary cursor-pointer rounded-2xl">
              {/* <CardContent className="mt-4">Notifications</CardContent> */}
              <CardHeader>
                <CardTitle className="flex items-center justify-between font-normal text-md">
                  <div className="flex items-center justify-center gap-3">
                    <EnvelopeClosedIcon className="w-8 h-8" />
                    <span>Messages</span>
                  </div>
                  <div className="w-2 h-2 bg-yellow-900 rounded-full mr-2"></div>{' '}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="w-1/3 hover:bg-secondary cursor-pointer rounded-2xl">
              {/* <CardContent className="mt-4">Notifications</CardContent> */}
              <CardHeader>
                <CardTitle className="flex items-center justify-between font-normal text-md">
                  <div className="flex items-center justify-center gap-3">
                    <BellIcon className="w-8 h-8" />
                    <span>Notifications</span>
                  </div>
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>{' '}
                </CardTitle>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
      </section>
      <span className="text-xl px-8">Overview</span>
      <section className="flex items-start gap-6 justify-center px-6 py-4 mb-8">
        <Link href="/app/products" className="w-[26rem]">
          <Card className="hover:bg-secondary cursor-pointer rounded-2xl">
            <CardHeader className="">
              <CardTitle className="flex items-center justify-between">
                Products <DashboardIcon />
              </CardTitle>
            </CardHeader>
            <CardContent className=" h-auto">12</CardContent>
            <CardFooter className="font-extralight text-sm text-muted-foreground">
              add new or update collection
            </CardFooter>
          </Card>
        </Link>
        <Card className="w-[26rem] rounded-2xl hover:bg-secondary cursor-pointer">
          <CardHeader className="">
            <CardTitle className="flex items-center justify-between">
              Sales <RocketIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="h-auto">$900</CardContent>
          <CardFooter className="font-extralight text-sm text-muted-foreground">
            $150 pending
          </CardFooter>
        </Card>
        <Card className="w-[26rem] rounded-2xl hover:bg-secondary cursor-pointer">
          <CardHeader className="">
            <CardTitle className="flex items-center justify-between">
              Bids <Crosshair2Icon />
            </CardTitle>
          </CardHeader>
          <CardContent className=" h-auto">30+</CardContent>
          <CardFooter className="font-extralight text-sm text-muted-foreground">
            20 satsified
          </CardFooter>
        </Card>
        <Card className="w-[26rem] rounded-2xl hover:bg-secondary cursor-pointer">
          <CardHeader className="">
            <CardTitle className="flex items-center justify-between">
              Deadlines <TimerIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className=" h-auto">12</CardContent>
          <CardFooter className="font-extralight text-sm text-muted-foreground">
            5 this week
          </CardFooter>
        </Card>
        <div></div>
      </section>

      <span className="text-xl px-8 flex items-center justify-between">
        Clients{' '}
        <div className="w-1/4 flex items-center justify-center gap-2">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <Input type="search" className="w-full" placeholder="search.." />
        </div>
      </span>
      <section className="px-6 py-4 mb-8">
        <Table className="border">
          <TableHeader>
            <TableHead>s/n</TableHead>
            <TableHead></TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Transaction Status</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell></TableCell>
              <TableCell>foo</TableCell>
              <TableCell>complete</TableCell>
              <TableCell>
                <Button className="rounded" size="sm">
                  View
                </Button>
              </TableCell>
              <TableCell>
                <Button className="rounded" size="sm">
                  Message
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell></TableCell>
              <TableCell>bar</TableCell>
              <TableCell>pending</TableCell>
              <TableCell>
                <Button className="rounded" size="sm">
                  View
                </Button>
              </TableCell>
              <TableCell>
                <Button className="rounded" size="sm">
                  Message
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  )
}
