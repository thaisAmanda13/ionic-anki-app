import { AlertController } from "@ionic/angular";

export class ConfirmAlert {

    public alertController: AlertController = new AlertController()
    async confirm(message = 'Tem certeza?', header) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: header,
            message: `Message <strong>${message}</strong>!!!`,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        return false
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        return true
                    }
                }
            ]
        });

        return await alert.present();
    }
}
