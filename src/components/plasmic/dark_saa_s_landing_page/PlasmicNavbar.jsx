// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uunoEEDogHzkMXiHpEbU64
// Component: ddKbSYWJnNzJ
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Logo from "../../Logo"; // plasmic-import: 727yRhPBX55h/component
import Button from "../../Button"; // plasmic-import: 6aP2U4alYtJI/component
import { useScreenVariants as useScreenVariantsh25UAOp1AQ6B } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: H25uAOp1aQ6b/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic.module.css"; // plasmic-import: uunoEEDogHzkMXiHpEbU64/projectcss
import * as sty from "./PlasmicNavbar.module.css"; // plasmic-import: ddKbSYWJnNzJ/css

createPlasmicElementProxy;

export const PlasmicNavbar__VariantProps = new Array();

export const PlasmicNavbar__ArgProps = new Array();

const $$ = {};

function PlasmicNavbar__RenderFunc(props) {
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__d5QKa)}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
          smallLogo={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? undefined
              : undefined
          }
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__jtxqZ)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__ov5Xy)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__puoh)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___440Ba)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Product"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__acRy0)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__t5XnX)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__lDun7)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Purchase"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__wDnlc)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___3WnOi)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__fuaXd)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"How it Work"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__w0YBa)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__a8Ehm)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__pkp2N)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"About us"}
          </Button>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox__mxcvD)}>
          <Button
            className={classNames("__wab_instance", sty.button___8Usys)}
            color={"navLink"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___6E29)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__x2KP9)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Log in"}
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__eQvme)}
            color={"navLinkBlue"}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___50V4R)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__kqfog)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            {"Sign Up"}
          </Button>
        </div>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar";
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps
  }
);

export default PlasmicNavbar;
/* prettier-ignore-end */
