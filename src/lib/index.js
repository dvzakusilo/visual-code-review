'use strict';
import tippy from 'tippy.js'

const $sBaseClass = 'visualcr';

/**
 * Function for generation of preventions on pages from a config.
 * @param patterns
 * @param options
 * @constructor
 */
export class VisualCR {
    init($obConfig) {

        /** @const HTMLElement $obDebug Subject for debug info. */
        let $obDebug = document.createElement('div');
        $obDebug.classList.add($sBaseClass + '_button');
        $obDebug.innerHTML = 'VCR Debug info.';

        let $obDebugTooltip = document.createElement('div');
        $obDebugTooltip.classList.add($sBaseClass + '_tooltip');


        for (let $sLink in $obConfig) {

            /** @const HTMLElement $obParser Subject of the tag of the link. */
            const $obParser = document.createElement('a');

            $obParser.href = $sLink;

            /** @internal If the current page is found in a config, then we receive elements which need to be allocated.  */
            if (window.location.pathname === $obParser.pathname || $sLink === '*') {

                /**  @internal Add info to debug tooltip.  */
                let $obDebugTooltipContent = document.createElement('div');

                let $obDebugLink =  document.createElement('a');
                $obDebugLink.href = $sLink;
                $obDebugLink.innerHTML = $sLink;

                $obDebugTooltipContent.appendChild($obDebugLink);

                for (let $sAnchor in $obConfig[$sLink]) {

                    let $arElements = document.querySelectorAll($sAnchor);
                    /** @internal We add a class and tooltip to each element.  */
                    $arElements.forEach(function ($obElement) {

                        $obElement.setAttribute("data-tooltip", $obConfig[$sLink][$sAnchor][0]);

                        /** @internal If class not allowed, then add class "error". */
                        const $sClassName = (typeof ($obConfig[$sLink][$sAnchor][1]) === 'undefined') ? 'error' : $obConfig[$sLink][$sAnchor][1];
                        $obElement.classList.add($sBaseClass);
                        $obElement.classList.add($sBaseClass + '__' + $sClassName);

                        // Add popup

                        tippy($obElement, {
                            content: '[' + $sClassName + '] ' +$obConfig[$sLink][$sAnchor][0],
                            interactive: true,
                        });

                        // Add content
                        let $obContent = document.createElement('div');
                        $obContent.classList.add($sBaseClass + '_content');
                        $obContent.classList.add($sBaseClass + '_content__' + $sClassName);
                        $obContent.innerHTML = $obConfig[$sLink][$sAnchor][0];
                        $obDebugTooltipContent.appendChild($obContent);
                    });

                }

                // Add debug info.
                $obDebugTooltip.appendChild($obDebugTooltipContent);

            }

            tippy($obDebug, {
                content: $obDebugTooltip,
                interactive: true,
                theme: 'light',
                trigger: 'click'
            });
            document.body.appendChild($obDebug);
        }
    }
};




