create table songs(
	id int auto_increment primary key,
    title varchar(100),
    artist varchar(100),
    cover varchar(255),
    file_url varchar(255)
);

insert into songs (title, artist, covder, file_url)
values
('Privilege','The Weeknd', '/songs/privilege.mp3'),
('A lesser man','The Weeknd', '/songs/a-lesser-man.mp3'),
('Cry for Me','The Weeknd', '/songs/cry-for-me.mp3'),
('Hurt you','The Weeknd', '/songs/hurt-you.mp3'),
('Oceans','Frank Ocean ft Jay-z', '/songs/oceans.mp3'),
('One Of The Girls','The Weeknd', '/songs/one-of-the-girls.mp3'),
('Take me back','The Weeknd', '/songs/take-me-back.mp3'),
('Tears in the rain','The Weeknd', '/songs/tears-in-the-rain.mp3'),
('Try me','The Weeknd', '/songs/try-me.mp3'),
('Mary on a cross','Ghost','/songs/mary-on-a-cross.mp3')