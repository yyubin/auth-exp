package org.fosho.be.security.response.exception;


import lombok.Getter;
import org.fosho.be.security.response.responseitem.MessageItem;
import org.fosho.be.security.response.responseitem.StatusItem;

@Getter
public class LoginIdDuplicateException extends RuntimeException {

    private Integer errorStatus;
    private String errorMessage;

    private String loginId;

    public LoginIdDuplicateException(String loginId) {
        this.errorStatus = StatusItem.BAD_REQUEST;
        this.errorMessage = MessageItem.DUPLICATE_USER;

        this.loginId = loginId;
    }
}