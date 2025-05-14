type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];
type ExcludeKeysByType<T, V> = {
    [K in keyof T as T[K] extends V ? never : K]: T[K];
};
declare class FakeSVG { }

declare module "./railroad" {
    export type DiagramNode = FakeSVG | DiagramMultiContainer;
}

declare module "@moojor224/railroad-diagrams" {
    export type TextNode = string | Comment;
    type Shortcut<T> = (...args: ConstructorParameters<typeof T>) => InstanceType<typeof T>;
    const def: {
        Diagram: Shortcut<Diagram>,
        Terminal: Shortcut<Terminal>,
        NonTerminal: Shortcut<NonTerminal>,
        Comment: Shortcut<Comment>,
        Skip: Shortcut<Skip>,
        Start: Shortcut<Start>,
        End: Shortcut<End>,
        Sequence: Shortcut<Sequence>,
        Stack: Shortcut<Stack>,
        OptionalSequence: Shortcut<OptionalSequence>,
        Choice: Shortcut<Choice>,
        MultipleChoice: Shortcut<MultipleChoice>,
        HorizontalChoice: Shortcut<HorizontalChoice>,
        Optional: Shortcut<Optional>,
        OneOrMore: Shortcut<OneOrMore>,
        AlternatingSequence: Shortcut<AlternatingSequence>,
        ZeroOrMore: Shortcut<ZeroOrMore>,
        Group: Shortcut<Group>,
        ComplexDiagram: Shortcut<ComplexDiagram>,
        Block: Shortcut<Block>,
    };
    export default def;

    export type DiagramNode = FakeSVG | DiagramMultiContainer;
    export class DiagramMultiContainer { }
    export class Diagram {
        constructor(...node: (DiagramMultiContainer | FakeSVG)[]);
        toSVG(): SVGSVGElement;
        appendTo(parent?: HTMLElement): void;
    }
    // leaves
    export class Terminal extends FakeSVG {
        constructor(text: string, options?: {
            href?: string;
            title?: string;
            cls?: string;
        });
    }
    export class NonTerminal extends FakeSVG {
        constructor(text: string, options?: {
            href?: string;
            title?: string;
            cls?: string;
        });
    }
    export class Comment extends FakeSVG {
        constructor(text: string, options?: {
            href?: string;
            title?: string;
            cls?: string;
        });
    }
    export class Skip extends FakeSVG {
        constructor();
    }
    export class Start extends FakeSVG {
        constructor(options: {
            type?: "simple" | "complex";
            label?: string;
        })
    }
    export class End extends FakeSVG {
        constructor(options: {
            type?: "simple" | "complex";
        })
    }

    // containers
    export class Sequence extends DiagramMultiContainer {
        constructor(...children: DiagramNode[]);
    }
    export class Stack extends DiagramMultiContainer {
        constructor(...children: DiagramNode[]);
    }
    export class OptionalSequence extends DiagramMultiContainer {
        constructor(...children: DiagramNode[]);
    }
    export class Choice extends DiagramMultiContainer {
        constructor(indeex: number, ...children: DiagramNode[]);
    }
    export class MultipleChoice extends DiagramMultiContainer {
        constructor(index: number, type: "any" | "all", ...children: DiagramNode[]);
    }
    export class HorizontalChoice extends DiagramMultiContainer {
        constructor(...children: DiagramNode[]);
    }
    export class Optional extends FakeSVG {
        constructor(child: DiagramNode, skip?: "skip");
    }
    export class OneOrMore extends FakeSVG {
        constructor(child: DiagramNode, repeat?: TextNode);
    }
    export class AlternatingSequence extends DiagramMultiContainer {
        constructor(option1: DiagramNode, option2: DiagramNode);
    }
    export class ZeroOrMore extends FakeSVG {
        constructor(child: DiagramNode, repeat?: TextNode, skip?: "skip");
    }
    export class Group extends FakeSVG {
        constructor(child: DiagramNode, label?: TextNode, cls?: string);
    }



    export class ComplexDiagram extends FakeSVG { }
    export class Block extends FakeSVG {
        constructor(options?: {
            width?: number;
            up?: number;
            height?: number;
            down?: number;
        })
    }
    export const Options: {
        DEBUG: boolean;
        VS: number;
        AR: number;
        DIAGRAM_CLASS: string;
        STROKE_ODD_PIXEL_LENGTH: boolean;
        INTERNAL_ALIGNMENT: "center" | "left" | "right";
        CHAR_WIDTH: number;
        COMMENT_CHAR_WIDTH: number;
        ESCAPE_HTML: boolean;
    };
}