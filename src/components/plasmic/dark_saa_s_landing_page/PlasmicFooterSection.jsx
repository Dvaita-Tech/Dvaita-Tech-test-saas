// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uunoEEDogHzkMXiHpEbU64
// Component: STpLo0aBQ-DK
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Logo from "../../Logo"; // plasmic-import: 727yRhPBX55h/component
import Button from "../../Button"; // plasmic-import: 6aP2U4alYtJI/component
import { useScreenVariants as useScreenVariantsh25UAOp1AQ6B } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: H25uAOp1aQ6b/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic.module.css"; // plasmic-import: uunoEEDogHzkMXiHpEbU64/projectcss
import * as sty from "./PlasmicFooterSection.module.css"; // plasmic-import: STpLo0aBQ-DK/css
import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: VWkutvvqtmgc/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: Wgjw8pCDSDGD/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: vXAR6zvWL8sL/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: 7M-e8TjDKINz/icon

createPlasmicElementProxy;

export const PlasmicFooterSection__VariantProps = new Array();

export const PlasmicFooterSection__ArgProps = new Array();

const $$ = {};

function PlasmicFooterSection__RenderFunc(props) {
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__f5Q7O)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__hRlWn)}>
            <div className={classNames(projectcss.all, sty.freeBox___68JBb)}>
              <Logo
                data-plasmic-name={"logo"}
                data-plasmic-override={overrides.logo}
                className={classNames("__wab_instance", sty.logo)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__etj48
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur \nadipiscing elit, sed do eiusmod tempor"
                }
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__uW5)}>
                <FacebooksvgIcon
                  className={classNames(projectcss.all, sty.svg__zeAjf)}
                  role={"img"}
                />

                <TwittersvgIcon
                  className={classNames(projectcss.all, sty.svg__zYh6V)}
                  role={"img"}
                />

                <InstagramsvgIcon
                  className={classNames(projectcss.all, sty.svg__zyrBc)}
                  role={"img"}
                />

                <LinkedinsvgIcon
                  className={classNames(projectcss.all, sty.svg__n2Cce)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__ckcKe)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__t8VfB
              )}
            >
              {"Menu"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__h6A2)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__dUzIc)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jTpyi)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iNuBd
                )}
              >
                {"Product"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__tzbV)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__eiWO)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__sdfBf)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vCiZt
                )}
              >
                {"Purchase"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__crrd5)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__wvySb)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__m3E1D)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__me2Eo
                )}
              >
                {"How it Work"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__l8O6V)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___5WGLi)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__hBaGw)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___92Cek
                )}
              >
                {"About us"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__roIdl)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__c93VN
              )}
            >
              {"Help"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__k0E5U)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__tubSj)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__ngTR)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lbXbF
                )}
              >
                {"Privacy and\nPolicy"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___6WCiu)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__aUqce)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__hlEnu)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dLwX
                )}
              >
                {"Terms of Use"}
              </div>
            </Button>
          </div>
          <div className={classNames(projectcss.all, sty.column__qKh99)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__uXwY
              )}
            >
              {"Company"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button__uhXbL)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___5AzTm)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___3ZsgS)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kvTlV
                )}
              >
                {"Our Team"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button___4COuz)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__x6Y8M)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__vIHgO)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__suZw
                )}
              >
                {"Partner with us"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__vgQ5A)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rBuIe)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jUlDp)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xMeXu
                )}
              >
                {"Privacy & Policy"}
              </div>
            </Button>
          </div>
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox___3VGpC)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__xxgAv
          )}
        >
          {"Copyrights \u00a9 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "logo"],
  columns: ["columns", "logo"],
  logo: ["logo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */