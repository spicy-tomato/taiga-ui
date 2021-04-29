(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{Raxz:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMapperModule",(function(){return h}));var a=n("2kYt"),p=n("sEIs"),r=n("SVIu"),o=n("l4xa"),m=n("EM62"),i=n("OZlg"),l=n("e0eB"),c=n("iyc4"),u=n("M03u");let s=(()=>{class e{constructor(){this.mapper=(e,t)=>`Total: ${e} ${t}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mapper-example1"]],decls:3,vars:5,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"tuiMapper"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"]("Transform 10 into ",m["\u0275\u0275pipeBind3"](2,1,10,t.mapper,"\u20bd"),""))},pipes:[u.a],encapsulation:2,changeDetection:0}),e})(),d=(()=>{class e{constructor(){this.numbers=[1,2,3,4,5],this.mapper=(e,t)=>e.map(e=>e*t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mapper-example2"]],decls:3,vars:6,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1),m["\u0275\u0275pipe"](2,"tuiMapper"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate2"]("Transform ",t.numbers," into ",m["\u0275\u0275pipeBind3"](2,2,t.numbers,t.mapper,3),""))},pipes:[u.a],encapsulation:2,changeDetection:0}),e})();var f=n("u8jZ");const T=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],E=["heading",$localize`:␟10fe4829c652ad18f53ca09cab7eb79044c55fe4␟8594746851560578197:With array`];var M,_,b;function x(e,t){if(1&e&&(m["\u0275\u0275i18nStart"](0,M),m["\u0275\u0275elementStart"](1,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](2,T),m["\u0275\u0275element"](3,"tui-mapper-example1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](5,E),m["\u0275\u0275element"](6,"tui-mapper-example2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2)}}function A(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",4),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,_),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,b),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}M=$localize`:␟60db275aad6d6fcafa5648c920947a74ad7d2502␟1345914388717321709: Pipe to transform a value with a function ${"\ufffd#1\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_MAPPER_EXAMPLE1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_MAPPER_EXAMPLE1:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#6\ufffd"}:START_TAG_TUI_MAPPER_EXAMPLE2:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_MAPPER_EXAMPLE2:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,M=m["\u0275\u0275i18nPostprocess"](M),_=$localize`:␟589535f5788c7779cc0693fd5c80cb2fe695fba2␟423248318659210107: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiMapperPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,b=$localize`:␟daecd9318a412b6e447ed3e701d10a2b79afedc7␟1909998837191870850: Use pipe into template with function and its arguments: `;let g=(()=>{class e{constructor(){this.exampleImportModule="import {TuiMapperPipeModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiMapperPipeModule\n    ],\n...\n",this.exampleInsertTemplate="{{item | tuiMapper: mapper: someArg}}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-mapper-example1',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMapperExample1 {\n    readonly mapper = (amount: number, currencySymbol: string) =>\n        `Total: ${amount} ${currencySymbol}`;\n}\n",HTML:"<p>Transform 10 into {{ 10 | tuiMapper: mapper: '\u20bd' }}</p>\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-mapper-example2',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMapperExample2 {\n    readonly numbers = [1, 2, 3, 4, 5] as const;\n\n    readonly mapper = (numbers: Array<number>, multiplier: number) =>\n        numbers.map(number => number * multiplier);\n}\n",HTML:"<p>Transform {{numbers}} into {{numbers | tuiMapper: mapper: 3}}</p>\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-mapper"]],decls:3,vars:0,consts:[["header","Mapper","package","CDK","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,x,7,2,"ng-template",1),m["\u0275\u0275template"](2,A,10,2,"ng-template",2),m["\u0275\u0275elementEnd"]())},directives:[i.a,l.a,c.a,s,d,f.a],styles:[".text[_ngcontent-%COMP%]{font-size:19px}"],changeDetection:0}),e})(),h=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.TuiMapperPipeModule,a.c,r.h,p.f.forChild(Object(r.o)(g))]]}),e})()}}]);