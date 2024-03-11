// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uunoEEDogHzkMXiHpEbU64
// Component: b6046LC5jlXm
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsh25UAOp1AQ6B } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: H25uAOp1aQ6b/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic.module.css"; // plasmic-import: uunoEEDogHzkMXiHpEbU64/projectcss
import * as sty from "./PlasmicProductCard.module.css"; // plasmic-import: b6046LC5jlXm/css
import productImgpng7KQqR8GcoACh from "./images/productImgpng.png"; // plasmic-import: 7kQqR8GcoACh/picture

createPlasmicElementProxy;

export const PlasmicProductCard__VariantProps = new Array();

export const PlasmicProductCard__ArgProps = new Array();

const $$ = {};

function PlasmicProductCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsh25UAOp1AQ6B()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicImg__
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "50px" : "100%"
          }
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: productImgpng7KQqR8GcoACh,
            fullWidth: 100,
            fullHeight: 100,
            aspectRatio: undefined
          }}
        />

        <h3
          data-plasmic-name={"h3"}
          data-plasmic-override={overrides.h3}
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Lorem ipsum dolor sit amet"
            : "Lorem ipsum dolor sit amet"}
        </h3>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "img", "h3", "text"],
  freeBox: ["freeBox", "img", "h3", "text"],
  img: ["img"],
  h3: ["h3"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProductCard__ArgProps,
          internalVariantPropNames: PlasmicProductCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */