import { ArrowForward, CardGiftcard } from "@mui/icons-material";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { useState } from "react";
import { Container } from "./ui/container";
import { IconBox } from "./ui/icon-box";
import { Icon } from "@iconify/react";

function ElementTest() {
  const [faculty, setFaculty] = useState("");
  const [year, setYear] = useState("");
  const [pn, setPn] = useState("P");

  return (
    <Container className="flex flex-col gap-8">
      {/* Button Variant */}
      <div className="flex flex-col gap-8">
        <h1 className="title-large">Button Variants</h1>

        <div className="flex flex-col gap-6">
          {/* Default Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Button>ต่อไป</Button>
            <Button size="sm">ต่อไป</Button>
            <Button size="md">ต่อไป</Button>
            <Button size="lg">ต่อไป</Button>
            <Button size="xl">ต่อไป</Button>
            <Button size="xxl">ต่อไป</Button>
            <Button disabled>ต่อไป</Button>
            <Button>
              ต่อไป
              <ArrowForward />
            </Button>
            <Button style={{ width: 160 }}>
              ต่อไป
              <ArrowForward />
            </Button>
            <Button size="xxl" cartoonish={true}>
              <ArrowForward />
              ต่อไป
            </Button>
          </div>

          {/* Outline Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Button variant="outline">ต่อไป</Button>
            <Button variant="outline" size="sm">
              ต่อไป
            </Button>
            <Button variant="outline" size="md">
              ต่อไป
            </Button>
            <Button variant="outline" size="lg">
              ต่อไป
            </Button>
            <Button variant="outline" size="xl">
              ต่อไป
            </Button>
            <Button variant="outline" size="xxl">
              ต่อไป
            </Button>
            <Button variant="outline" disabled>
              ต่อไป
            </Button>
            <Button variant="outline">
              ต่อไป
              <ArrowForward />
            </Button>
            <Button variant="outline" style={{ width: 160 }}>
              ต่อไป
              <ArrowForward />
            </Button>
            <Button variant="outline" size="xxl" cartoonish={true}>
              <ArrowForward />
              ต่อไป
            </Button>
          </div>

          {/* Some Buttons in UI */}
          <div className="flex gap-4 flex-col flex-wrap">
            <Button
              variant="default"
              size="xxl"
              color="light-blue"
              cartoonish={true}
            >
              <CardGiftcard fontSize="large" />
              <p className="title-medium">แก้จำนวนของขวัญ</p>
            </Button>
            <div className="flex gap-2">
              <Button
                variant="default"
                size="xl"
                color="light-pink"
                cartoonish={true}
              >
                <p className="title-medium">
                  สร้าง Coin รับ Code สำหรับพี่ค่าย
                </p>
              </Button>
              <Button
                variant="default"
                size="xl"
                color="yellow"
                cartoonish={true}
              >
                <p className="title-medium">
                  สร้าง Coin รับ Code สำหรับน้องค่าย
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Input Variant */}
      <div className="flex flex-col gap-8">
        <h1 className="title-large">Input Variants</h1>

        <div className="flex flex-col gap-6">
          <Input />
          <Input
            label="ระบุจำนวนเหรียญ"
            placeholder="000"
            type="number"
            inputSize={"xl"}
            min={1}
          />
          <Input label="ชื่อกิจกรรม" placeholder="กรอกชื่อกิจกรรม" />
          <div className="flex items-center gap-4">
            <Input label="วัน เวลา ที่หมดอายุ" type="date" inputSize={"lg"} />
            <Input type="time" containerClassName="translate-y-3" />
          </div>

          <Input label="ID" />
          <div className="flex w-full items-center gap-4">
            <Input label="ชื่อจริง" />
            <Input label="นามสกุล" />
          </div>
          <div className="flex w-full items-center gap-4">
            <Input
              label="Pin"
              inputSize={"sm"}
              maxLength={1}
              inputClassName="text-center"
            />
            <Input
              containerClassName="translate-y-3"
              inputSize={"sm"}
              inputClassName="text-center"
              maxLength={1}
            />
            <Input
              containerClassName="translate-y-3"
              inputSize={"sm"}
              inputClassName="text-center"
              maxLength={1}
            />
            <Input
              containerClassName="translate-y-3"
              inputSize={"sm"}
              inputClassName="text-center"
              maxLength={1}
            />
            <Input
              containerClassName="translate-y-3"
              inputSize={"sm"}
              inputClassName="text-center"
              maxLength={1}
            />
            <Input
              containerClassName="translate-y-3"
              inputSize={"sm"}
              inputClassName="text-center"
              maxLength={1}
            />
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div className="flex flex-col gap-8">
        <h1 className="title-large">Dropdown Variants</h1>
        <div className="flex flex-col gap-4 items-end">
          {/* Faculty Dropdown */}
          <DropdownMenu size="lg">
            <DropdownMenuTrigger>{faculty || "คณะ"}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                {[
                  "ชอบมาก เรียนสนุก",
                  "ก็โอเค มีบางอย่างที่ท้าทาย",
                  "ไม่ค่อยชอบ แต่พยายามปรับตัว",
                  "คิดว่าควรเปลี่ยนสาย",
                ].map((item) => (
                  <DropdownMenuItem
                    key={item}
                    onSelect={() => setFaculty(item)}
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Year Dropdown */}
          <DropdownMenu size="md" color="light-blue">
            <DropdownMenuTrigger>{year || "ปี"}</DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {["4", "5", "6"].map((item) => (
                  <DropdownMenuItem key={item} onSelect={() => setYear(item)}>
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* P/N Dropdown */}
          <DropdownMenu size="sm" color="light-blue">
            <DropdownMenuTrigger className="bg-light-blue">
              {pn}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {["P", "N"].map((item) => (
                  <DropdownMenuItem key={item} onSelect={() => setPn(item)}>
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Icon */}
      <div className="flex flex-col gap-8">
        <h1 className="title-large">Icon Variants</h1>
        <div className="flex gap-4 items-end flex-wrap">
          <IconBox bgcolor="yellow">
            <Icon icon="solar:star-circle-outline" width={48} height={48} />
          </IconBox>
          <IconBox bgcolor="yellow" size="sm">
            <Icon icon="solar:star-circle-outline" width={20} height={20} />
          </IconBox>
          <IconBox bgcolor="red" size="lg" cartoonish={false}>
            <Icon icon="solar:star-rings-linear" width={124} height={124} />
          </IconBox>
          <IconBox bgcolor="pink">
            <Icon icon="solar:star-outline" width={48} height={48} />
          </IconBox>
          <IconBox bgcolor="light-blue">
            <Icon icon="solar:gift-linear" width={48} height={48} />
          </IconBox>
        </div>
      </div>
    </Container>
  );
}

export default ElementTest;
