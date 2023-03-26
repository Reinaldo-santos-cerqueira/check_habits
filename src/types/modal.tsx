export interface IModalAlert {
    modal: boolean;
    setModal: (modal: boolean) => void;
    img: string;
    text: string
    funcNaviCorrect: () => void;
}
