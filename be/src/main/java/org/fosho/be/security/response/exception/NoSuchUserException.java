package org.fosho.be.security.response.exception;

import lombok.Getter;
import org.fosho.be.security.response.responseitem.MessageItem;
import org.fosho.be.security.response.responseitem.StatusItem;

@Getter
public class NoSuchUserException extends RuntimeException  {

    private Integer errorStatus;
    private String errorMessage;

    private String message;

    public NoSuchUserException(String message) {
        this.errorStatus = StatusItem.NOT_FOUND;
        this.errorMessage = MessageItem.NOT_FOUND_USER;

        this.message = message;
    }
}
