-- DROP TABLE faculty
CREATE TABLE faculty
  (
   faculty      NVARCHAR(10)      NOT NULL,
   faculty_name NVARCHAR(50), 
   CONSTRAINT PK_faculty PRIMARY KEY(faculty) 
  );
     
delete faculty;
insert into faculty (faculty,   faculty_name )
			values  ('����',   '����������� ���� � ����������');
insert into faculty   (faculty,   faculty_name )
            values  ('����',   '���������� ���������� � �������');
insert into faculty   (faculty,   faculty_name )
            values  ('���',     '����������������� ���������');
insert into faculty   (faculty,   faculty_name )
            values  ('���',     '���������-������������� ���������');
insert into faculty   (faculty,   faculty_name )
            values  ('����',    '���������� � ������� ������ ��������������');
insert into faculty   (faculty,   faculty_name )
            values  ('���',     '���������� ������������ �������');

--------------------------------------------------------------------------------------------
-- DROP TABLE pulpit
CREATE TABLE pulpit 
(
 pulpit       NVARCHAR(10)      NOT NULL,
 pulpit_name  NVARCHAR(100), 
 faculty      NVARCHAR(10)      NOT NULL, 
 CONSTRAINT FK_pulpit_faculty FOREIGN KEY(faculty)   REFERENCES faculty(faculty), 
 CONSTRAINT PK_pulpit PRIMARY KEY(pulpit) 
 ); 
 
delete pulpit;  
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty )
             values  ('����',    '������������� ������ � ���������� ',                         '����'  );
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty )
             values  ('������', '���������������� ������������ � ������ ��������� ���������� ', '����'  );
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty)
              values  ('��',      '�����������',                                                 '���') ;         
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty)
             values  ('��',      '������������',                                                 '���') ;   
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty)
             values  ('��',      '��������������',                                              '���');           
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty)
             values  ('�����',   '���������� � ����������������',                               '���');                
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty)
             values  ('������',  '������������ �������������� � ������-��������� �������������','���');                  
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty)
             values  ('��',     '���������� ����',                                              '����');                        
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty)
             values  ('�����',  '������ ����� � ���������� �������������',                      '����');                        
insert into pulpit   (pulpit,    pulpit_name,                                                   faculty)
             values  ('��',     '������������ �����',                                           '���');            
insert into pulpit   (pulpit,    pulpit_name,                                                              faculty)
             values  ('��������','���������� ���������������� ������� � ����������� ���������� ����������','���');             
insert into pulpit   (pulpit,    pulpit_name,                                                      faculty)
             values  ('�������','���������� �������������� ������� � ����� ���������� ���������� ','����');                    
insert into pulpit   (pulpit,    pulpit_name,                                                                         faculty)
             values  ('��������','�����, ���������� ����������������� ����������� � ���������� ����������� �������', '����');
insert into pulpit   (pulpit,    pulpit_name,                                                      faculty)
             values  ('����',    '������������� ������ � ����������',                              '���');   
insert into pulpit   (pulpit,    pulpit_name,                                                      faculty)
             values  ('����',   '����������� � ��������� ������������������',                      '���');    
------------------------------------------------------------------------------------------------------------------------        - DROP  TABLE teacher
CREATE TABLE teacher
 ( 
  teacher       NVARCHAR(10) NOT  NULL,
  teacher_name  NVARCHAR(50), 
  pulpit        NVARCHAR(10) NOT NULL, 
  CONSTRAINT PK_teacher  PRIMARY KEY(teacher), 
  CONSTRAINT FK_teacher_pulpit FOREIGN   KEY(pulpit)   REFERENCES pulpit(pulpit)
 ) ;
 
 
delete  teacher;
insert into  teacher    (teacher,   teacher_name, pulpit )
                       values  ('����',    '������ �������� �������������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('�����',    '�������� ��������� ��������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('�����',    '���������� ������ ����������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('����',    '������ ���� �����������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('����',    '������� �������� ��������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('�����',    '�������� ������ ���������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('���',     '����� ��������� ����������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('���',     '������� ��������� �����������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('���',     '��������� ����� ��������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('����',     '��������� ������� ����������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('������',  '����������� ������� ����������', '����' );
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('?',     '�����������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                      values  ('���',     '����� ������� ��������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('���',     '����� ������� �������������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('������',   '���������� ��������� �������������',  '������');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('�����',   '������� ������ ����������',  '������');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('������',   '����������� ��������� ��������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('����',   '������� ��������� ����������',  '����');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('����',   '������ ������ ��������',  '��');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('����', '������� ������ ����������',  '������');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('������',   '���������� �������� ��������',  '��');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('���',   '������ ���������� ������������',  '��');
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('�����',   '��������� �������� ���������',  '�����'); 
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('������',   '���������� �������� ����������',  '��'); 
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('������',   '��������� ������� ���������',  '��������'); 
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('�����',   '�������� ������ ����������',  '��'); 
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('���',   '����� ������ ��������',  '�����'); 
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('����',   '������ ������� ���������',  '�������'); 
insert into  teacher    (teacher,  teacher_name, pulpit )
                       values  ('����',   '������� ���� ����������',  '��������'); 
---------------------------------------------------------------------------------------------------------------------
-- DROP TABLE subject 
CREATE TABLE subject
    (
     subject      NVARCHAR(10)     NOT NULL, 
     subject_name NVARCHAR(50)  NOT NULL,
     pulpit       NVARCHAR(10)     NOT NULL,  
     CONSTRAINT PK_subject PRIMARY KEY(subject),
     CONSTRAINT FK_subject_pulpit FOREIGN  KEY(pulpit)  REFERENCES pulpit(pulpit)
    );

delete subject;
insert into subject   (subject,   subject_name,        pulpit )
                       values ('����',   '������� ���������� ������ ������',                   '����');
insert into subject   (subject,   subject_name,        pulpit)
                       values ('��',     '���� ������',                                        '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('���',    '�������������� ����������',                          '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('����',  '������ �������������� � ����������������',            '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('��',     '������������� ������ � ������������ ��������',       '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('���',    '��������������� ������� ����������',                 '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('����',     '������������� ������ ��������� ����������',        '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('���',     '�������������� �������������� ������',              '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('��',      '������������ ��������� ',                           '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('�����',   '��������������� ������, �������� � �������� �����', '������');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('���',     '������������ �������������� �������',               '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('���',     '����������� ���������������� ������������',         '������');
insert into subject   (subject,   subject_name,                            pulpit)
               values ('��',   '���������� ���������',                     '����');
insert into subject   (subject,   subject_name,                             pulpit )
               values ('��',   '�������������� ����������������',          '����');  
insert into subject   (subject,   subject_name,                             pulpit )
               values ('����', '���������� ������ ���',                     '����');                   
insert into subject   (subject,   subject_name,                             pulpit )
               values ('���',  '��������-��������������� ����������������', '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('��',     '��������� ������������������',                       '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('��',     '������������� ������',                               '����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('������OO','�������� ������ ������ � ���� � ���. ������.',      '��');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('�������','������ ��������������� � ������������� ���������',  '������');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('��',     '���������� �������� ',                              '��');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('��',    '�����������',                                        '�����');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('��',    '������������ �����',                                 '��');   
insert into subject   (subject,   subject_name,        pulpit )
                       values ('���',    '���������� ��������� �������',                      '��������'); 
insert into subject   (subject,   subject_name,        pulpit )
                       values ('���',    '������ ��������� ����',                             '��');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('����',   '���������� � ������������ �������������',           '�����'); 
insert into subject   (subject,   subject_name,        pulpit )
                       values ('����',   '���������� ���������� �������� ���������� ',        '�������');
insert into subject   (subject,   subject_name,        pulpit )
                       values ('���',    '���������� ������������',                           '��������');          
---------------------------------------------------------------------------------------------------------------------
-- DROP TABLE auditorium_type 
create table auditorium_type 
(
  auditorium_type   nvarchar(10) constraint auditorium_type_PK  primary key,  
  auditorium_typename  nvarchar(30) constraint auditorium_typename_NOT_NULL not null         
);

delete auditorium_type;
insert into auditorium_type   (auditorium_type,   auditorium_typename )
                       values  ('��',   '����������');
insert into auditorium_type   (auditorium_type,   auditorium_typename )
                       values  ('��-�',   '������������ �����');
insert into auditorium_type   (auditorium_type,   auditorium_typename )
                       values  ('��-�', '���������� � ���. ������������');
insert into auditorium_type   (auditorium_type,   auditorium_typename )
                       values  ('��-X', '���������� �����������');
insert into auditorium_type   (auditorium_type,   auditorium_typename )
                       values  ('��-��', '����. ������������ �����');
---------------------------------------------------------------------------------------------------------------------
-- DROP TABLE auditorium 
create table auditorium 
(
 auditorium           nvarchar(10) primary key,  -- ��� ���������
 auditorium_name      nvarchar(200),          -- ��������� 
 auditorium_capacity  int,              -- �����������
 auditorium_type      nvarchar(10) not null      -- ��� ���������
                      references auditorium_type(auditorium_type)  
);

delete  auditorium;
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('206-1',   '206-1', '��-�', 15);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity)
                       values  ('301-1',   '301-1', '��-�', 15);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('236-1',   '236-1', '��',   60);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('313-1',   '313-1', '��',   60);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('324-1',   '324-1', '��',   50);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('413-1',   '413-1', '��-�', 15);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('423-1',   '423-1', '��-�', 90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('408-2',   '408-2', '��',  90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('103-4',   '103-4', '��',  90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('105-4',   '105-4', '��',  90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('107-4',   '107-4', '��',  90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('110-4',   '110-4', '��',  30);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('111-4',   '111-4', '��',  30);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                      values  ('114-4',   '114-4', '��-�',  90 );
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values ('132-4',   '132-4', '��',   90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values ('02�-4',   '02�-4', '��',   90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values ('229-4',   '229-4', '��',   90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('304-4',   '304-4','��-�', 90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('314-4',   '314-4', '��',  90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('320-4',   '320-4', '��',  90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                       values  ('429-4',   '429-4', '��',  90);
insert into  auditorium   (auditorium,   auditorium_name, auditorium_type, auditorium_capacity )
                        values  ('?',   '???', '��',  90);
-----------------------------------------------------------------------------------------------------------------------



