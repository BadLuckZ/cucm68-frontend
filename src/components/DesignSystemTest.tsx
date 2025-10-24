import { Abc, Home } from "@mui/icons-material";
import { Icon } from "@iconify/react";

function DesignSystemTest() {
  return (
    <div className="flex flex-col gap-8">
      {/* Color */}
      <div className="flex flex-col gap-6 text-black">
        <h1 className="title-large">Color</h1>
        <div className="flex gap-4">
          <div className="w-20 h-20 border bg-purple"></div>
          <div className="w-20 h-20 border bg-pink"></div>
          <div className="w-20 h-20 border bg-light-pink"></div>
          <div className="w-20 h-20 border bg-vivid-pink"></div>
          <div className="w-20 h-20 border bg-light-blue"></div>
          <div className="w-20 h-20 border bg-yellow"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-20 h-20 border bg-white"></div>
          <div className="w-20 h-20 border bg-grey"></div>
          <div className="w-20 h-20 border bg-deep-grey"></div>
          <div className="w-20 h-20 border bg-deep-deep-grey"></div>
          <div className="w-20 h-20 border bg-black"></div>
          <div className="w-20 h-20 border bg-red"></div>
          <div className="w-20 h-20 border bg-green"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-20 h-20 shadow-elevation-1"></div>
          <div className="w-20 h-20 border rounded-md shadow-elevation-1"></div>
          <div className="w-20 h-20 shadow-elevation-2"></div>
          <div className="w-20 h-20 border rounded-md shadow-elevation-2"></div>
          <div className="w-20 h-20 shadow-make-cartoonish"></div>
          <div className="w-20 h-20 border rounded-md shadow-make-cartoonish"></div>
        </div>
      </div>

      {/* Typeface */}
      <div className="flex gap-12">
        {/* Baseline Section */}
        <div className="flex flex-col gap-6 text-black">
          <h1 className="title-large">Baseline</h1>
          <p className="display-large">DisplayLarge</p>
          <p className="display-medium">DisplayMedium</p>
          <p className="display-small">DisplaySmall</p>
          <p className="headline-large">HeadlineLarge</p>
          <p className="headline-medium">HeadlineMedium</p>
          <p className="headline-small">HeadlineSmall</p>
          <p className="title-large">TitleLarge</p>
          <p className="title-medium">TitleMedium</p>
          <p className="title-small">TitleSmall</p>
          <p className="label-large">LabelLarge</p>
          <p className="label-medium">LabelMedium</p>
          <p className="label-small">LabelSmall</p>
          <p className="body-large">BodyLarge</p>
          <p className="body-medium">BodyMedium</p>
          <p className="body-small">BodySmall</p>
        </div>

        {/* Emphasized Section */}
        <div className="flex flex-col gap-6 text-black">
          <h1 className="title-large">Emphasis</h1>
          <p className="display-large-emphasized">DisplayLargeEmphasized</p>
          <p className="display-medium-emphasized">DisplayMediumEmphasized</p>
          <p className="display-small-emphasized">DisplaySmallEmphasized</p>
          <p className="headline-large-emphasized">HeadlineLargeEmphasized</p>
          <p className="headline-medium-emphasized">HeadlineMediumEmphasized</p>
          <p className="headline-small-emphasized">HeadlineSmallEmphasized</p>
          <p className="title-large-emphasized">TitleLargeEmphasized</p>
          <p className="title-medium-emphasized">TitleMediumEmphasized</p>
          <p className="title-small-emphasized">TitleSmallEmphasized</p>
          <p className="label-large-emphasized">LabelLargeEmphasized</p>
          <p className="label-medium-emphasized">LabelMediumEmphasized</p>
          <p className="label-small-emphasized">LabelSmallEmphasized</p>
          <p className="body-large-emphasized">BodyLargeEmphasized</p>
          <p className="body-medium-emphasized">BodyMediumEmphasized</p>
          <p className="body-small-emphasized">BodySmallEmphasized</p>
        </div>
      </div>

      {/* Icons */}
      <div className="flex flex-col gap-6 text-black">
        <h1 className="title-large">Icons (MUI)</h1>
        <div className="flex gap-4 items-center">
          <Abc />
          <Abc className="text-pink" />
          <Home />
          <Home className="text-red" />
        </div>
        <div className="flex gap-4 items-center">
          <Home fontSize="inherit" />
          <Home fontSize="small" />
          <Home fontSize="small" className="text-green" />
          <Home fontSize="medium" />
          <Home fontSize="large" />
          <Home style={{ fontSize: 48 }} />
        </div>

        <h1 className="title-large">Icons (Iconify)</h1>
        <div className="flex gap-4 items-center">
          <Icon icon="material-symbols:abc" />
          <Icon icon="material-symbols:abc" className="text-pink" />
          <Icon icon="material-symbols:home" />
          <Icon icon="material-symbols:home" className="text-red" />
        </div>
        <div className="flex gap-4 items-center">
          <Icon icon="material-symbols:home" width={16} height={16} />
          <Icon icon="material-symbols:home" width={24} height={24} />
          <Icon
            icon="material-symbols:home"
            width={24}
            height={24}
            className="text-green"
          />
          <Icon icon="material-symbols:home" style={{ fontSize: 48 }} />
        </div>
      </div>
    </div>
  );
}

export default DesignSystemTest;
