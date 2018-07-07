const translates = {
    "Password match. Score of strength password is 4 or 4": "Пароли совпадают и получили оценку сложности 4 из 4",
    "Password match. Score of strength password is 3 or 4": "Пароли совпадают и получили оценку сложности 3 из 4",
    "Password match. Score of strength password is 2 or 4": "Пароли совпадают и получили оценку сложности 2 из 4",
    "Password match. Score of strength password is 1 or 4": "Пароли совпадают и получили оценку сложности 1 из 4",
    "Password match. Score of strength password is 0 or 4": "Пароли совпадают и получили оценку сложности 0 из 4",
    "Password match. Score of strength password not available, because using not english chars, not digits or not !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~":
        "Пароли совпадают. Оценка сложности пароля не доступна, так как использовались символы, отличные от букв латинского алфавита, цифр и символов !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    "P == NP (optional)":
        "P == NP (необязательно)",
    "I saved the QR Key": "Картинка с QR-ключом сохранена",
    "I wrote down the recovery phrase": "Фраза для восстановления записана",
    "I understand that loss of the recovery phrase is equivalent to the loss of access to the wallet":
        "Я понимаю, что потеря фразы для восстановления равнозначна потере доступа к кошельку",
    "I understand that it is unsafe to keep the recovery phrase on devices with Internet access since the recovery phrase is the master key from my wallet":
        "Я понимаю, что фразу для восстановления небезопасно хранить на устройствах с доступом в интернет, так как она является мастер-ключом от моего кошелька",
    "One day cryptoassets inside your wallet may cost a fortune, so we ask you to confirm that you agree with the following statements:":
        "Однажды криптоактивы на счету Вашего кошелька могут стоить целое состояние, поэтому просим Вас подтвердить, что Вы согласны со следующими высказываниями:",
    "Public keys allow to get the balance of the wallet and compose unsigned transactions but do not have enough rights to move cryptoassets from the wallet. Only public keys will be shared with WMSCrypto servers.":
        "Публичные ключи позволяют просматривать баланс кошелька и составлять неподписанные транзакции, но не дают доступ к управлению криптоактивами. Только публичные ключи будут отправлены на серверы WMSCrypto",
    "*QR Key is protected by your password and password of WMSCrypto, thus it may be safely kept on the devices with Internet access":
        "*QR-ключ защищен Вашим паролем и паролем WMSCrypto, поэтому его можно без опасений хранить на устройствах с выходом в интернет.",
    "QR Key is required for day-to-day use of your wallet. Take a screenshot or save it as a photo.":
        "QR-ключ нужен для повседневного использования Вашего кошелька. Сохраните его как фотографию или сделайте снимок экрана.",
    "Make sure to write down the recovery phrase and keep it in a safe place without online access. The phrase is a master key from your wallet. It was generated on your device and you are the only person who has access to it.": "Обязательно запишите фразу для восстановления и храните в надежном месте без выхода в интернет. Фраза сгенерирована на вашем устройстве, и является мастер-ключом от вашего кошелька.",
    "Send": "Отправить",
    "Unlock key": "Разблокировать ключ",
    "Add input": "Добавить вход",
    "Add change": "Добавить сдачу",
    "Show": "Показать",
    "Hide": "Скрыть",
    "Delete": "Удалить",
    "Receiver name": "Имя получателя",
    "transaction": "транзакция",
    "transfer": "перевод",
    "All fields must be present": "Все поля должны быть указаны",
    "Inputs must be present": "Должны быть указаны входы",
    "Receiver must be present": "Должен быть указан получатель",
    "Other": "Другое",
    "You can create transaction in manual mode": "Вы можете создать транзакцию в ручном режиме",
    "Present invalid fields": "Присутствуют неправильно заполенные поля",
    "Complex required error": "Отсутствует обязательный элемент",
    "Required field": "Обязательное поле",
    "Account for change": "Счёт для сдачи",
    "Yes": "Да",
    "No": "Нет",
    "Previous transaction hash": "Хэш предыдущей транзакции",
    "Use RBF": "Использовать RBF",
    "Locktime": "Время блокировки",
    "Output ID": "ID выхода",
    "Account": "Счет",
    "Address": "Адрес",
    "Input": "Вход",
    "Output": "Выход",
    "Change": "Сдача",
    "Check data": "Проверьте данные",
    "Choice transaction source": "Выберите способ формирования",
    "Offline version only for PC": "Офлайн версия только для ПК",
    "ERROR": "ОШИБКА",
    "Data loading": "Загрузка данных",
    "Please enter mnemonic from previous screen by number": "Введите мнемоник с предыдущего экрана под номером",
    "Check passed": "Проверка пройдена",
    "Check save mnemonics": "Проверка записанных мнемоников",
    "Generation public keys": "Генерация публичных ключей",
    "Generate key": "Генерация ключа",
    "Next": "Далее",
    "Previous": "Назад",
    "Step": "Шаг",
    "Create password": "Создание пароля",
    "Create wallet": "Создать кошелек",
    "Change wallet password": "Изменить пароль",
    "Connect wallet": "Подключить кошелек",
    "Make transaction": "Подписать транзакцию",
    "Menu": "Меню",
    "Restart": "Очистить",
    "New password": "Придумайте пароль",
    "Repeat new password": "Повторите пароль",
    "Passwords match and have strong security.": "Пароли совпадают и не входят в топ-100 популярных паролей",
    'Password length must be more 8 symbols.': "Длина пароля должна быть больше 8 символов",
    "SAVE_MNEMONICS": "После нажатия кнопки \"Создать кошелек\" Вы увидите QR-ключ, необходимый для проведения операций с кошельком, полученным из фразы для восстановления. Обязательно сохраните его!",
    "Generate mnemonics": "Фраза для восстановления",
    "Generated mnemonics to 256-bits entropy": "Фраза для восстановления",
    "Download encrypted mnemonics": "Скачать хранилище ключей",
    "Generate pubkeys": "Продолжить",
    "All pubkeys was generated successful": "Все публичные ключи успешно сгенерированы",
    "Generated pubkey for": "Создан публичный ключ для",
    "Download pubkeys": "Скачать публичные ключи",
    "IMPORTANT!": "ВНИМАНИЕ!",
    "I've written down my recovery phrase and fully understand that password and recovery phrase are the only keys to my wallet and they cannot be recovered in case they are lost.": 'После нажатия на кнопку "Завершить создание кошелька", данное окно закроется. Пожалуйста, убедитесь, что Вы записали фразу для восстановления и сохранили картинку с QR-ключом.',
    "I understand": "Я понимаю, что однажды криптоактивы на счету этого кошелька могут стоить целое состояние, поэтому фраза для восстановления уже записана и хранится в надежном месте, а картинка с QR-ключом сохранена.",
    "Save mnemonics": "Завершить создание кошелька",
    'Save only public keys': "Только публ ключи",
    "Go to telegram": "Перейти в Telegram",
    "Return to telegram": "Вернуться в Telegram",
    "Reload in offline mode": "Перезагрузить в оффлайн режиме",
    "Operation successful": "Все получилось!",
    "Mnemonics": "Введите фразу для восстановления",
    "Passphrase": "Дополнительные слова (если есть)",
    "Encrypt mnemonics": "Создать QR-ключ",
    "Summary": "Итог",
    "Detail": "Подробнее",
    "Receiver": "Получатель",
    "Value": "К отправке",
    "Fee": "Комиссия сети",
    "Upload encrypted mnemonics": "Загрузить QR-ключ",
    "Decrypt mnemonics": "Подписать транзакцию",
    "Transaction signature": "Подписанная транзакция",
    "Download transaction data": "Скачать подписанную транзакцию",
    "Gas price": "Цена газа",
    "Gas limit": "Лимит газа",
    "Nonce": "Номер транзакции",
    "To": "Адрес",
    "Data": "Данные",
    "Create from file": "Создать из файла",
    "Upload file with transaction data": "Загрузить неподписанную транзакцию",
    "Manual creation": "Собрать вручную",
    "File is not json or invalid": "Файл не валидный json",


    "Download offline version": "Скачать офлайн версию",
    "INVALID_REQUEST": "Данные запроса не корректны",
    "INVALID_UUID": "Данный идентификатор не существует или просрочен",
    "SORRY": "Извините, что-то пошло не так, попробуйте позже",
    "CRYPTO_FALSE": "Ваш браузер не может использовать безопасные крипто функции, используйте последнии версии Chrome, Firefox или Safari",
    'Passwords not matched': "Пароли не совпадают",
    "Input your Passphrase": "Убрать плейсхолдер",
    "Mnemonics invalid": "Фраза для восстановления некорректна и не рекомендуется к использованию!",
    "Create mnemonics seed": "Продолжить",
    "Password.": "Введите пароль",
    "No file selected": "Файл не выбран",
    "Browse...": "Загрузить...",
    "Send transaction": "Отправить транзакцию в сеть",
    "QR-key": "QR-ключ",
    "Generate QR code": "Генерация QR кода",
    "Unlock": "Разблокировать",
    "Locked": "Заблокировано",
    "Unlocked": "Разблокировано",
    "QR code cannot be readied": "QR код не читается или отсутсвует",
    "Upload QR-key": "Загрузите QR-ключ",
    "Switch language to": "Переключить язык на",
    "Invalid password": "Неправильный пароль",
    "Invalid anchor": "Используется неправильный QR-ключ",
    "Save transaction": "Сохранить транзакцию",
    "Edit transaction": "Изменить транзакцию",
    "ENCRYPTED_BY_ANCHOR_1": "Кошелек зашифрован с помощью пароля WMS Crypto, используйте бота",
    "ENCRYPTED_BY_ANCHOR_2": "или создайте новый кошелек из мнемоника через форму прикрепления кошелька",
    "ENCRYPTED_WITHOUT_ANCHOR_1": "Ваш QR-ключ не защищен паролем",
    "ENCRYPTED_WITHOUT_ANCHOR_2": "и не может использоваться в онлайн режиме",
    "Invalid mnemonics": "Неправильные мнемоники",
    "Save accounts": "Сохранить аккаунты"
};

export default translates;
