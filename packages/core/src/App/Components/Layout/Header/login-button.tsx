import { observer } from 'mobx-react-lite';

import { Button } from '@deriv/components';
import { redirectToLogin } from '@deriv/shared';
import { useStore } from '@deriv/stores';
import { useTranslations } from '@deriv-com/translations';

interface LoginButtonV2Props {
    className?: string;
}

const LoginButton = observer(({ className }: LoginButtonV2Props) => {
    const { localize } = useTranslations();
    const { common } = useStore();

    const handleLoginClick = async () => {
        await redirectToLogin(common.current_language);
    };

    return (
        <Button
            id='dt_login_button_v2'
            className={className}
            has_effect
            text={localize('Log in')}
            onClick={handleLoginClick}
            primary
        />
    );
});

export { LoginButton };
