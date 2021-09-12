import { AlertController } from "@ionic/angular";

export class ConfirmAlert {

    public alertController: AlertController = new AlertController()
    async confirm(message , header) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: header,
            message: `<strong>${message}</strong>`,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        return false
                    }
                }, {
                    text: 'Confirmar',
                    handler: () => {
                        return true
                    }
                }
            ]
        });

        return await alert.present();
    }
}
