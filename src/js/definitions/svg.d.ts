// https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
// parcel at least does not require us to alter tsconfig.json
// i think that part might be out of date in general
declare module "*.svg" {
  // this can be typed as React.FunctionComponent<React.SVGAttributes<SVGElement>>
  // but then svg files cannot be passed to imgsrc
  // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  const content: string;
  export default content;
}
